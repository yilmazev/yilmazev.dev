import { create } from "zustand"
import { profile } from "../data/profile.json"

interface IProfileStore {
  email: string;
  fullName: string;
  avatar: string;
}

export const useProfileStore = create<IProfileStore>((set) => {
  return {
    email: profile.email,
    fullName: profile.full_name,
    avatar: profile.avatar
  }
})