export default (reference) => {
    if (!reference.href) {
        return `[${reference.children[0].props.value}]`;
    }

    return <a href={reference.$ref}>{reference.children}</a>
}