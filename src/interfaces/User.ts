import {Document} from 'mongoose';
interface User extends Document {
  user_name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  favourite_games: string[];
  profile_image: string;
}

interface OutputUser {
  id?: string;
  user_name: string;
  email: string;
  favourite_games: string[];
  profile_image: string;
}

export {User, OutputUser};
