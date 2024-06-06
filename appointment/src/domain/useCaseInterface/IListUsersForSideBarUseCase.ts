export interface IListUsersForSideBarUseCase {
  execute(doctor_id: string): Promise<string[] | null>;
}
