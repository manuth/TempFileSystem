import FileSystem = require("fs-extra");
import Path = require("path");
import { dirSync, Options } from "tmp";
import { TempFileSystem } from "./TempFileSystem";

/**
 * Represents a temporary directory.
 */
export class TempDirectory extends TempFileSystem
{
    /**
     * Initializes a new instance of the `TempDirectory` class.
     *
     * @param options
     * The options for the initialization.
     */
    public constructor(options?: Options)
    {
        super(options);
    }

    public Dispose()
    {
        FileSystem.emptyDirSync(this.FullName);
        super.Dispose();
    }

    /**
     * Joints the arguments together and returns the path contained by the temporary directory.
     *
     * @param path
     * The path that is to be joined.
     */
    public MakePath(...path: string[])
    {
        return Path.join(this.FullName, ...path);
    }

    protected Initialize(options: Options)
    {
        this.TempFileSystemEntry = dirSync(options);
    }
}