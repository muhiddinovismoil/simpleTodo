import bcrypt from "bcrypt";
export const hashPassword = async (
    password: string,
    saltRounds: number = 10
): Promise<string> => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};
export const comparePassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};
