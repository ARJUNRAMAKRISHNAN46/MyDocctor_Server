import { walletEntity } from "../entities/wallet";

export interface IWalletHistoryUseCase {
  execute(userId: string): Promise<walletEntity[] | null>;
}
