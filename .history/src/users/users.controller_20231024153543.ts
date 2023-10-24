import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common' 
import { UserService } from './users.service'
import { User } from 'src/models/user'

@Controller('users')