'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export function PrivyDebugWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={(function() {
        const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
        if (!privyAppId) {
          throw new Error('NEXT_PUBLIC_PRIVY_APP_ID is not set in environment variables');
        }
        return privyAppId;
      })()} // Set this in .env.local
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#8B5CF6',
          showWalletLoginFirst: false,
        },
        // Minimal configuration to avoid chain compatibility issues
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
} 