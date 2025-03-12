import { create } from "zustand"
import { profile } from "../data/profile.json"

interface ISocial {
  platform: string;
  link: string;
}

interface IProfileStore {
  email: string;
  fullName: string;
  avatar: string;
  social: ISocial[];
}

export const useProfileStore = create<IProfileStore>(() => {
  return {
    email: profile.email,
    fullName: profile.full_name,
    avatar: profile.avatar,
    social: profile.social
  }
})