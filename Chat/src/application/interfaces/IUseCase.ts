import {
  IGetMessagesUseCase,
  ISendMessageUseCase,
  IAddChatUseCase,
  IGetChatUseCase,
} from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  addChatUseCase: (dependencies: IDependencies) => IAddChatUseCase;
  getChatUseCase: (dependencies: IDependencies) => IGetChatUseCase;
  getMessageUseCase: (dependencies: IDependencies) => IGetMessagesUseCase;
  sendMessageUseCase: (dependencies: IDependencies) => ISendMessageUseCase;
}
