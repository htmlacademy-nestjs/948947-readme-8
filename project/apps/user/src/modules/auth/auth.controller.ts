import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginUserDto } from '../../dto/login-user.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // TODO: гарда - только незарегистрированным
  // DTO - почта*, имя*, пароль* (храним в захэшированном виде), аватар. Дата регистрации - автоматически в сущности при создании.
  // валидация - собрать и отправить все ошибки кучей, чтобы после сабмита фронт мог их отобразить
  // rdo - созданный пользователь (без пароля и даты), код 201
  @Post('register')
  @ApiOperation({ summary: 'Регистрация нового пользователя' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Новый пользователь успешно зарегистрирован'
  })
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return newUser.toPOJO();
  }

  // TODO: гарда - только незарегистрированным
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return verifiedUser.toPOJO();
  }


  /*
  Также:

  Смена пароля:
  @Patch, param id + body passwords (старый и новый, правила валидации смотри в ТЗ)

  + логаут

  */

  /*
  Ожидается тип number, но на самом деле придёт строка (как и любые другие получаемые параметры). Этот момент можно оптимизировать двумя способами (если этого не сделать, можно нарваться на ошибку, пытаясь сделать с пришедшими данными что-то характерное только для чисел)
  1) Через пайп прямо тут (см. ниже)
  2) Зарегистрировать `ValidationPipe` глобально и в объекте настроек передать свойство `transform: true`. Тогда пайп возьмёт на себе приведение параметров, исходя из его типа. То есть не придётся указывать для каждого параметра пайп с префиксом `Parse*`
  */
  @Get('/demo/:id')
  // public async demoPipe(@Param('id', ParseIntPipe) id: number) {
  public async demoPipe(@Param('id') id: number) {
    console.log(typeof id);
  }


}
