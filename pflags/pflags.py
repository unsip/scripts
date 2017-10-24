# Process /proc/cpuinfo flags data

import click
import re
from links import LINKS
# - read from filename
# - find all flags
# - create JS object

TEMPLATE = """export const FLAGS = {
NAME
}
"""

def match_flags(data):
    myMatcher = re.compile(r'([A-Z0-9_]+)\s+/\*\s*([^*]+)\s+\*/', re.MULTILINE)
    matches = myMatcher.findall(data)
    return matches

def get_links(flag):
    strg = ''
    links = LINKS[flag]
    for i, link in enumerate(links):
        strg += '"' + link + '"'
        if i != len(links) - 1:
            strg += ', '
    return strg

@click.command()
@click.argument('name')
def cli(name):
    with open(name, 'r') as f:
        data = f.read()

    matches = match_flags(data)
    entries = ''

    for (flagname, description) in matches:
        desc_template = '{\n' + '     description: "{0}",\n'.format(description)
        links_template = '     links: ' + '[' + get_links(flagname) + ']\n' + '  }'
        entry = '  "{0}": {1}{2},\n'.format(flagname, desc_template,
                links_template)
        entries += entry

    with open('result.js', 'w') as f:
        f.write(re.sub('NAME', entries, TEMPLATE))
