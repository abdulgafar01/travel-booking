import mongoose from "mongoose";
import Package from "../models/Package.js";
export const getPackages = async (req, res, next) => {
    try {
        const packages = await Package.find().sort({
            createdAt: -1,
        });
        res.status(200).json({
            success: true,
            data: packages,
        });
    }
    catch (error) {
        next(error);
    }
};
export const bookPackage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const packageId = Array.isArray(id) ? id[0] : id;
        if (!packageId || !mongoose.Types.ObjectId.isValid(packageId)) {
            res.status(400).json({
                success: false,
                message: "Invalid package ID",
            });
            return;
        }
        const updatedPackage = await Package.findOneAndUpdate({
            _id: new mongoose.Types.ObjectId(packageId),
            availableSlots: { $gt: 0 },
        }, {
            $inc: {
                availableSlots: -1,
            },
        }, {
            new: true,
            runValidators: true,
        });
        if (!updatedPackage) {
            res.status(409).json({
                success: false,
                message: "Package is sold out or unavailable",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Package booked successfully",
            data: updatedPackage,
        });
    }
    catch (error) {
        next(error);
    }
};
