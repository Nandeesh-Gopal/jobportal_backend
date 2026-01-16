import Job from "../models/Job.js";
export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};
