import Path = require("path");
import { dirSync, DirResult } from "tmp";
import { DirOptions } from ".";
import { TempFileSystem } from "./TempFileSystem";

/**
 * Represents a temporary directory.
 */
export class TempDirectory extends TempFileSystem<DirOptions>
{
    /**
     * Initializes a new instance of the `TempDirectory` class.
     *
     * @param options
     * The options for the initialization.
     */
    public constructor(options?: DirOptions)
    {
        super(options);
    }

    /**
     * @inheritdoc
     */
    public Dispose(): void
    {
        super.Dispose();
    }

    /**
     * Joins the arguments together and returns the path contained by the temporary directory.
     *
     * @param path
     * The path that is to be joined.
     *
     * @returns
     * The joined path relative to the temporary directory.
     */
    public MakePath(...path: string[]): string
    {
        return Path.join(this.FullName, ...path);
    }

    /**
     * @inheritdoc
     *
     * @returns
     * The temporary directory.
     */
    protected CreateFileEntry(): DirResult
    {
        return dirSync(this.Options);
    }
}
