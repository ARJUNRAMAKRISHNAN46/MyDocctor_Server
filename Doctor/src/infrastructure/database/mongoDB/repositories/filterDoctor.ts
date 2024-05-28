import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";
import { FilterParams } from "@/domain/entities/filterParams";

export const filterDoctor = async (
  params: FilterParams
): Promise<UserEntity[] | null> => {
  try {
    const { name, country, expertise, sort, consultationType } = params;

    // Initialize filters
    let filters: any = { role: "doctor", isVerified: true, isBlocked: false }; // Assuming doctors who are blocked should not be listed
    if (name) filters.name = { $regex: name, $options: "i" };
    if (country) filters.country = { $regex: country, $options: "i" };
    if (expertise) filters.expertise = { $regex: expertise, $options: "i" };
    if (consultationType) filters.consultationType = { $in: consultationType };

    console.log("🚀 ~ filterDoctor ~ filters:", filters);

    // Initialize sorting
    let sortOptions: any = {};
    if (sort) sortOptions.name = sort === "A-Z" ? 1 : -1;

    console.log("🚀 ~ filterDoctor ~ sortOptions:", sortOptions);

    // Execute query
    const doctors = await User.find(filters).sort(sortOptions);
    console.log("🚀 ~ filterDoctor ~ doctors:", doctors);

    return doctors;
  } catch (error: any) {
    console.log("🚀 ~ filterDoctor ~ error:", error);
    return null;
  }
};
