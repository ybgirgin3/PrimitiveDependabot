import MessageResponse from "./MessageResponse";

export default interface ErrorResponse extends MessageResponse {
  error: string;
  stack?: string;
}