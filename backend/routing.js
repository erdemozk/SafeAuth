import AuthRoutes from "./routes/AuthRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

export default (app) => {
  app.use("/api/auth", AuthRoutes);
  app.use("/api/user", UserRoutes);
};
