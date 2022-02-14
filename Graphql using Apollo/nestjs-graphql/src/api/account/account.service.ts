import { Injectable, NotFoundException } from '@nestjs/common';
import { AddAccountInput } from './dto/add-account.input';
import { GetAccountsArgs } from './dto/get-accounts.args';
import { AccountEntity } from './account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async create(data: AddAccountInput): Promise<AccountEntity> {
    const { email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);
    const account = this.accountRepository.create({
      email,
      password: hashedPassword,
    });
    await this.accountRepository.insert(account);
    return account;
  }

  async findOneById(id: string): Promise<AccountEntity> {
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw new NotFoundException();
    }
    return account;
  }

  async findAll(args: GetAccountsArgs): Promise<AccountEntity[]> {
    const { email } = args;

    const queryBuilder = this.accountRepository.createQueryBuilder('account');
    if (email) {
      queryBuilder.andWhere('account.email LIKE :email', { email: `%${email}%` });
    }

    const accountList = await queryBuilder.getMany();
    return accountList;
  }

  async remove(id: string): Promise<boolean> {
    await this.accountRepository.delete(id);
    return true;
  }
}
