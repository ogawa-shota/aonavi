// next-auth v5 の API ルート。`auth.ts` から GET / POST handler を re-export。
// Google OAuth のコールバック URL は `<your-domain>/api/auth/callback/google`。

import { handlers } from "../../../../../auth";

export const { GET, POST } = handlers;
