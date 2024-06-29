import { walletEntity } from "../entities/wallet";

export interface IRefundToWalletUseCase {
  execute(data: walletEntity): Promise<walletEntity | null>;
}
