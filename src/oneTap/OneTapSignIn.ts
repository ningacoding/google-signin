import { OneTapNativeModule } from '../spec/NativeOneTapSignIn';
import type { OneTapSignInModule, OneTapUser } from './types';

const signIn: OneTapSignInModule['signIn'] = (params): Promise<OneTapUser> => {
  return OneTapNativeModule.signIn({
    autoSignIn: true,
    filterByAuthorizedAccounts: true,
    ...params,
  }) as Promise<OneTapUser>;
};
const createAccount: OneTapSignInModule['createAccount'] = (
  params,
): Promise<OneTapUser> => {
  return OneTapNativeModule.signIn({
    autoSignIn: false,
    filterByAuthorizedAccounts: false,
    ...params,
  }) as Promise<OneTapUser>;
};

const signOut: OneTapSignInModule['signOut'] = () => {
  // make sure no params are passed to the native module
  return OneTapNativeModule.signOut();
};

/**
 * The entry point of the One-tap Sign In API, exposed as `GoogleOneTapSignIn`. This module uses the [Android Credential Manager](https://developers.google.com/identity/android-credential-manager) under the hood.
 * @group One-tap sign in module
 *
 *
 * @param _ `momentListener` Optional, only on Web. A callback function that is called when important events take place. [See reference.](https://developers.google.com/identity/gsi/web/reference/js-reference#PromptMomentNotification)
 *
 * */
export const GoogleOneTapSignIn = {
  signIn,
  signOut,
  createAccount,
} satisfies OneTapSignInModule;
