import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('users')
export class UserController {

  @Get()
  async index(@Req() req, @Res() res) {
    res.send({
      hello: 'world',
    });
  }
}
