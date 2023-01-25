import { ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver, GuildMember, PermissionResolvable } from "discord.js";
import { ExtendClient } from "../structures/Client";

/**
 * {
 *  name: "commandname",
 *  description:  "any description"
 *  run: async({ interaction }) => {
 * 
 * }
 * }
 */
export interface ExtendedInteraction extends CommandInteraction{
    member: GuildMember;
}

interface RunOptions {
    client: ExtendClient,
    interaction: ExtendedInteraction,
    args: CommandInteractionOptionResolver
    
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    userPermissions?: PermissionResolvable[];
    run: RunFunction;
    
} & ChatInputApplicationCommandData;