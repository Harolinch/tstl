//================================================================ 
/** @module std */
//================================================================
import { LogicError } from "./LogicError";

/**
 * Length Error.
 * 
 * @author Jeongho Nam <http://samchon.org>
 */
export class LengthError extends LogicError
{
    /**
     * Initializer Constructor.
     * 
     * @param message The error messgae.
     */
    public constructor(message: string)
    {
        super(message);
    }
}