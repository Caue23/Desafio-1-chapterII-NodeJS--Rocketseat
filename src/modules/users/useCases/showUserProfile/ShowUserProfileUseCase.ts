import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const UserExists = this.usersRepository.findById(user_id);
    
    if(!UserExists) {
      throw new Error("Users already exists");
  }


  return UserExists;
}
}

export { ShowUserProfileUseCase };
