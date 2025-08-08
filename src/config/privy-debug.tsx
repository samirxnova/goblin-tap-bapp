'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export function PrivyDebugWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} // Set this in .env.local
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