import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobId: mongoose.Schema.Types.ObjectId,
  applicantId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "Applied" }
});

export default mongoose.model("Application", applicationSchema);
