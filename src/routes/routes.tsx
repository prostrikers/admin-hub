import { useRoutes } from "react-router-dom";
import ProfileLayout from "../layouts/profileLayout";
import WithoutNavLayout from "../layouts/WithoutNav";
import { Bookings } from "../pages/bookings";
import { EditProfilePage, ProfilePage, ViewProfile } from "../pages/profile";
import { SignInPage } from "../pages/sign-in";
import { ApplicationRoutes } from "./constants";
import { ProtectedLayout } from "./protected";

export function Router() {
  let element = useRoutes([
    {
      path: ApplicationRoutes.SIGN_IN,
      element: (
        <WithoutNavLayout>
          <SignInPage />
        </WithoutNavLayout>
      ),
    },
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: "/",
          element: (
            <ProfileLayout>
              <ProfilePage />
            </ProfileLayout>
          ),
        },
        {
          path: ApplicationRoutes.DASHBOARD_BOOKINGS_PAGE,
          element: (
            <ProfileLayout>
              <Bookings />
            </ProfileLayout>
          ),
        },

        {
          path: ApplicationRoutes.DASHBOARD_USER_PROFILE,
          element: (
            <ProfileLayout>
              <ViewProfile />
            </ProfileLayout>
          ),
        },
        {
          path: ApplicationRoutes.DASHBOARD_EDIT_PROFILE,
          element: (
            <ProfileLayout>
              <EditProfilePage />
            </ProfileLayout>
          ),
        },
      ],
    },
  ]);
  return element;
}
