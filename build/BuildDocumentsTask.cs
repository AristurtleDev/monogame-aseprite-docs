using Cake.Common;
using Cake.Common.Tools.DotNet;
using Cake.Common.Tools.MSBuild;
using Cake.Frosting;

namespace BuildScripts;

[TaskName(nameof(BuildDocuments))]
[IsDependentOn(typeof(PrepTask))]
public sealed class BuildDocuments : FrostingTask<BuildContext>
{
    public override void Run(BuildContext context)
    {
        context.StartProcess("dotnet", "docfx ./source/docfx.json");
    }
}
