export const MISDEMEANOURS = ["rudeness", "vegetables", "lift", "united"] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
    citizenId: number;
    misdemeanour: MisdemeanourKind;
    date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};

export interface PostDataProps {
    subject: string;
    reason: MisdemeanourKind | JustTalk;
    details: string;
}

export interface PostResponseProps {
    success: boolean; // true for success; false for an error
    justTalked: boolean; // true if this was just wanting to talk, false for a real confession. Not present if success is false.
    message: string; // a message
}
