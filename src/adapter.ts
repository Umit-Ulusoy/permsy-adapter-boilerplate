import type { AdapterContext, BaseAdapter } from "permsy";

/**
 * Boilerplate adapter implementation for Permsy.
 * Replace `CustomAdapter` with your target framework's adapter name.
 */
export class CustomAdapter implements BaseAdapter {
  /**
   * Resolves the incoming event/message source into a normalized Permsy AdapterContext.
   */
  resolveContext = async (source: unknown): Promise<AdapterContext> => {
    // TODO: Extract user, channel, roles, and permissions from your framework's source object
    return {
      type: "slash", // Supported context types: "slash" | "prefix"
      userId: "",
      commandName: "",
      channelId: "",
      roles: [],
      permissions: [],
    };
  };

  /**
   * Sends an access denied message to the user using the framework's response mechanism.
   */
  sendDenyMessage = async (source: unknown, denyMessage: string): Promise<void> => {
    // TODO: Dispatch the deny message via your framework's native reply/send method
  };
}