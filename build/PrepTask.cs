using Cake.Common;
using Cake.Common.IO;
using Cake.Common.Xml;
using Cake.FileHelpers;
using Cake.Frosting;

namespace BuildScripts;

[TaskName(nameof(PrepTask))]
public sealed class PrepTask : FrostingTask<BuildContext>
{
    public override void Run(BuildContext context)
    {
        context.CleanDirectory(context.ArtifactsDir);
        context.StartProcess("dotnet", "tool restore");
        string version = context.XmlPeek("source/src/monogame-aseprite/source/MonoGame.Aseprite/MonoGame.Aseprite.csproj", "/Project/PropertyGroup/Version");
        System.Console.WriteLine($"Version: {version}");
        context.ReplaceTextInFiles("source/**/*.md", "{{VERSION}}", version);
    }
}
