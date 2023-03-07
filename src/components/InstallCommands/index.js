import React from "react";
import CodeBlock from "@theme/CodeBlock";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function InstallCommands() {
  return (
    <Tabs>
      <TabItem value="net-cli" label="NET CLI">
        <CodeBlock>
          {`dotnet add package MonoGame.Aseprite --version 5.0.0`}
        </CodeBlock>
      </TabItem>
      <TabItem value="package-manager" label="Package Manager">
        <CodeBlock>
          {`Install-Package MonoGame.Aseprite -Version 5.0.0`}
        </CodeBlock>
      </TabItem>
      <TabItem value="package-reference" label="Package Reference">
        <CodeBlock>
          {`<PackageReference Include="MonoGame.Aseprite" Version="5.0.0" />`}
        </CodeBlock>
      </TabItem>
    </Tabs>
  );
}
