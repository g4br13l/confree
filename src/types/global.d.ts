
declare global {

  namespace NodeJs {

    interface ProcessEnv {

      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_KEY: string;

      KINDE_CLIENT_ID: string;
      KINDE_CLIENT_SECRET: string;
      KINDE_ISSUER_URL: string;
      KINDE_SITE_URL: string;
      KINDE_POST_LOGOUT_REDIRECT_URL: string;
      KINDE_POST_LOGIN_REDIRECT_URL: string;

      DATABASE_URL: string;

    }
  }

}


