import NextLink from "next/link";
import { Navbar, Link, Text, Avatar, Dropdown, Image } from "@nextui-org/react";
import logo from "./logo.svg";
import { SunIcon } from "./icons/sunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export const MenuNavBar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "My Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <>
      <Navbar isBordered variant="sticky">
        
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <NextLink href="/" passHref>
            <Link>
              <Image
                src={"./logo.svg"}
                alt="logo-pokenext"
                width={36}
                height={36}
              />
              <Text
                b
                color="inherit"
                size="$md"
                weight="bold"
                css={{ marginLeft: "5px" }}
              >
                Poke
              </Text>
              <Text weight="bold" color={type === "dark" ? "#ffffff" : "#212121"}>
                Next
              </Text>
            </Link>
          </NextLink>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight"
          gap={25}
        >
          <Navbar.Link href="#">About</Navbar.Link>
          <NextLink href="/favorites" passHref>
            <Navbar.Link isActive>Favorites</Navbar.Link>
          </NextLink>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Switch
            checked={isDark}
            color={"primary"}
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/10f13510774061.560eadfde5b61.png"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback">
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="warning">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
              css={{
                color: index === collapseItems.length - 1 ? "$warning" : "",
              }}
              isActive={index === 0}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
