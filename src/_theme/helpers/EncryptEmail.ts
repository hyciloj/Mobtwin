export function encryptEmail({email}: {email: string | null}): string {

    if (email === null) {
        // Handle the case where email is null (you can return a default value or throw an error)
        email = "admin@email.com"
    }

    const [username, domain] = email.split('@')
    const encryptedUsername = encryptString({str: username}),
        encryptedDomain = encryptString({str: domain});
    return `${encryptedUsername}@${encryptedDomain}`
}

function encryptString({str}: {str: string}) {

    // If the string has 2 or fewer characters, don't encrypt it
    if (str.length <= 2) return str;

    // Encrypt the string by replacing characters with '*'
    const encryptedChars = Array.from(str).map((char, index) => {
        return index <= 1 ? char : '*';
    });

    return encryptedChars.join('')
}