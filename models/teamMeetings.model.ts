// import { mongoose } from "../db/mongoose";
// import { Document, Model, model, Types, Schema, Query } from "mongoose";


// var teamMemberSchema = new mongoose.Schema(
//   {
//     // date: {
//     //   type: Date,
//     //   required: true
//     // },
//     duration: {
//       type: String,
//       required: true
//     },
//     meetingCourse: {
//       type: String,
//       required: true
//     },
//     place: {
//       type: String,
//       required: true
//     },
//     internalEmployees: {
//       type: String,
//       required: true
//     },
//     title: {
//       type: String,
//       required: true
//     },
//     // users: [
//     //   {
//     //     firstName: {
//     //       type: String,
//     //       required: true
//     //     },
//     //     lastName: {
//     //       type: String,
//     //       required: true
//     //     },
//     //     organization: {
//     //       type: String,
//     //       required: true
//     //     },
//     //     role: {
//     //       type: String,
//     //       required: true
//     //     }
//     //   }
//     // ]
//   },
//   {
//     timestamps: true
//   }
// )

// var teamMember = mongoose.model<any>("teamMember", teamMemberSchema)
// export { teamMember }
import { mongoose } from "../db/mongoose";
import { Document, Model, model, Types, Schema, Query } from "mongoose";

var teamMeetingsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    meetingCourse: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    internalEmployees: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    users: [
      {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        organization: {
          type: String,
          required: true
        },
        role: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);
var TeamMeetings = mongoose.model<any>("TeamMeetings", teamMeetingsSchema);
export { TeamMeetings }
