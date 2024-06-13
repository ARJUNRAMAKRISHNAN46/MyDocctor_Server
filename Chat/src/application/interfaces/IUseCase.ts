import {
  IGetMessagesUseCase,
  ISendMessageUseCase,
  IGetUsersUseCase,
  IGetDoctorsUseCase,
  // IAddChatUseCase,
  // IGetChatUseCase,
} from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  getMessageUseCase: (dependencies: IDependencies) => IGetMessagesUseCase;
  sendMessageUseCase: (dependencies: IDependencies) => ISendMessageUseCase;
  getUsersUseCase: (dependencies: IDependencies) => IGetUsersUseCase;
  getDoctorsUseCase: (dependencies: IDependencies) => IGetDoctorsUseCase;
  // addChatUseCase: (dependencies: IDependencies) => IAddChatUseCase;
  // getChatUseCase: (dependencies: IDependencies) => IGetChatUseCase;
}
