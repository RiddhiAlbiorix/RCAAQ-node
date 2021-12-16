import { mongoose } from "../db/mongoose";

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
export { Duration };
