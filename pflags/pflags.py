# Process /proc/cpuinfo flags data

from links import LINKS
from sane_descriptions import SANE_DESCRIPTIONS
import click
import re

TEMPLATE = """export const FLAGS = {
NAME
}
"""

def match_flags(data):
    flagname = r'^#define\s(X86_FEATURE_|X86_BUG_)([A-Z0-9_]+)' # finds 246
    description = r'/\*\s*([^*]+)\*/'
    myRe = flagname + r'\s+[a-zA-Z0-9_(*+)\s]+\s' + description
    myMatcher = re.compile(myRe, re.MULTILINE)
    matches = myMatcher.findall(data)
    return matches

def get_links(flag):
    strg = ''
    links = LINKS[flag]
    for i, link in enumerate(links):
        strg += '["' + link[0] + '", "' + link[1] + '"]'
        if i != len(links) - 1:
            strg += ', '
    return strg

def correct_flag(flagname, description):
    flagname = flagname.lower()

    # "" means that flag is hidden by default from output
    if '""' in description:
        description = description.replace('""', '(hidden by default)')

    # Match real flagnames (such as xmm == sse)
    pattern = r'"(\w+)"\s'
    match = re.findall(pattern, description)
    if match:
        description = re.sub(pattern, r'', description)
        # Add 'monitor' as exception coz getting duplicate keys
        if match[0] != 'monitor':
            flagname = match[0]

    # Apply sane description if there is one
    if flagname in SANE_DESCRIPTIONS.keys():
        description = SANE_DESCRIPTIONS[flagname]

    # Substitude ending spaces with dots for consistency
    if description[len(description) - 1] == ' ':
        description = description[:len(description) - 1] + '.'

    return flagname, description

@click.command()
@click.argument('name')
def cli(name):
    with open(name, 'r') as f:
        data = f.read()

    matches = match_flags(data)
    entries = ''

    for (bam, flagname, description) in matches:
        # Getting links for current flag
        links_template = '     links: ' + '[' + get_links(flagname) + ']\n' + '  }'
        # Correcting flagnames so that they match /proc/cpuinfo namings
        flagname, description = correct_flag(flagname, description)
        desc_template = '{\n' + '     description: "{0}",\n'.format(description)
        entry = '  "{0}": {1}{2},\n'.format(flagname, desc_template,
                links_template)
        entries += entry

    with open('result.js', 'w') as f:
        f.write(re.sub('NAME', entries, TEMPLATE))
