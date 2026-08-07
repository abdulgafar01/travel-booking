import mongoose, { Schema, Document } from "mongoose";
import { IPackage } from "../interfaces/package.interface.js";

export interface IPackageDocument extends IPackage, Document {}

const packageSchema = new Schema<IPackageDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    availableSlots: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Package = mongoose.model<IPackageDocument>(
  "Package",
  packageSchema
);

export default Package;