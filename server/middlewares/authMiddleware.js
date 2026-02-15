import { clerkClient } from "@clerk/express";

// Middleware (Protect Educator Routes)
export const protectEducator = async (req, res, next) => {
  try {
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Not Authenticated"
      });
    }

    const user = await clerkClient.users.getUser(userId);

    console.log("User Private Metadata:", user.privateMetadata);

    if (user.privateMetadata?.role !== "educator") {
      return res.status(403).json({
        success: false,
        message: "Unauthorized Access"
      });
    }

    next();

  } catch (error) {
    console.log("Middleware Error:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
