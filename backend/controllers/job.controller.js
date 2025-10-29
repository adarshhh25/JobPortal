import { Job } from "../models/job.model.js";

// admin post krega job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Somethin is missing.",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}
// student ke liye
// export const getAllJobs = async (req, res) => {
//     try {
//         // const keyword = req.query.keyword || "";
//         // const query = {
//         //     $or: [
//         //         { title: { $regex: keyword, $options: "i" } },
//         //         { description: { $regex: keyword, $options: "i" } },
//         //     ]
//         // };

//          const title = Array.isArray(req.query.title)
//             ? req.query.title[0]
//             : req.query.title || "";

//             const location = Array.isArray(req.query.location)
//             ? req.query.location[0]
//             : req.query.location || "";

//             const query = await Job.find({
//             title: { $regex: title, $options: "i" },
//             location: { $regex: location, $options: "i" },
//             });


//         const jobs = await Job.find(query).populate({
//             path: "company"
//         }).sort({ createdAt: -1 });
//         if (!jobs) {
//             return res.status(404).json({
//                 message: "Jobs not found.",
//                 success: false
//             })
//         };
//         return res.status(200).json({
//             jobs,
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

export const getAllJobs = async (req, res) => {
  try {
    // Extract query params safely (handle arrays from frontend filters)
    const title = Array.isArray(req.query.title)
      ? req.query.title[0]
      : req.query.title || "";

    const location = Array.isArray(req.query.location)
      ? req.query.location[0]
      : req.query.location || "";

    // Build MongoDB query dynamically
    const query = {
      title: { $regex: title, $options: "i" },
      location: { $regex: location, $options: "i" },
    };

    // Fetch jobs directly
    const jobs = await Job.find(query)
      .populate("company")
      .sort({ createdAt: -1 });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        message: "No jobs found.",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error("Error in getAllJobs:", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};


// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
