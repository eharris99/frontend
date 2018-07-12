import { EventTypes } from 'redux-segment';

/**
 * Given a object of user, it identifies the user on segment
 * @param {ParseObject} session
 */
export const identifyUsingSession = session => {
  const email = session && session.get('email');
  if (email) {
    return {
      eventType: EventTypes.identify,
      eventPayload: {
        userId: email,
      },
    };
  }
  return undefined;
};
