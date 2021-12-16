import { mongoose } from "../db/mongoose";

// Duration schema
const durationSchema = new mongoose.Schema(
  {
    id: {
      type: Number
    },
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
)
const Duration = mongoose.model<any>("duration", durationSchema)

// Organization schema
const organizationSchema = new mongoose.Schema(
  {
    id: {
      type: Number
    },
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
)
const Organization = mongoose.model<any>("organization", organizationSchema)

export { Duration, Organization };

