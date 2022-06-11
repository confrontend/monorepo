import Section from "./section/ui-section";

export default function Title(props: any) {
  return (
    <Section>
      <h3>{props.children}</h3>
    </Section>
  );
}
