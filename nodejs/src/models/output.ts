export const verbosity = {
    error: 0,
    warning: 1,
    info: 2,
    verbose: 3
};


export class Output {
    static verbosity = verbosity.verbose;
    static prefix = "\n\t";
    static postfix = ", ";

    static error (message, ...args) {
        if (this.verbosity >= verbosity.error) {
            console.log("[!]", message, Output.parseArgs(args));
        }

    }

    static warning (message, ...args) {
        if (this.verbosity >= verbosity.warning) {
            console.log("[-]", message, Output.parseArgs(args));
        }

    }

    static info (message, ...args) {
        if (this.verbosity >= verbosity.info) {
            console.log("[+]", message, Output.parseArgs(args));
        }

    }

    static debug (message, ...args) {
        if (this.verbosity >= verbosity.verbose) {
            console.log("[*]", message, Output.parseArgs(args));
        }
    }

    static parseArgs(args: any[]): string {
        let newArgs = Output.prefix;

        args.forEach((arg, index) => {
            newArgs += JSON.stringify(arg) + (index > args.length ? Output.postfix : "");
        });

        return newArgs;
    }
}