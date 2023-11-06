using System.Threading.Tasks;
using BuildScripts;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;

public static class Program
{
    public static int Main(string[] args)
    {
        return new CakeHost()
            .UseWorkingDirectory("../")
            .UseContext<BuildContext>()
            .Run(args);
    }

    public static string GetArgument(this ICakeArguments args, string argName, string defaultArgValue)
        => args.HasArgument(argName) ? args.GetArgument(argName) : defaultArgValue;
}

public class BuildContext : FrostingContext
{
    public string ArtifactsDir {get;}

    public BuildContext(ICakeContext context)
        : base(context)
    {
        ArtifactsDir = context.Arguments.GetArgument("artifactsDir", "artifacts");
    }
}

[TaskName("Hello")]
public sealed class HelloTask : FrostingTask<BuildContext>
{
    public override void Run(BuildContext context)
    {
        context.Log.Information("Hello");
    }
}



[TaskName("Default")]
[IsDependentOn(typeof(BuildDocuments))]
public class DefaultTask : FrostingTask
{
}