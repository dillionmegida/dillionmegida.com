#!/usr/bin/env python3

import os
import re
import subprocess
from datetime import datetime

PATH_TO_ARTICLES = '/Users/dillion/Desktop/github/dm/data/articles'


def extract_number(string):
    r = re.compile(r'(\d+)')
    return int(r.findall(string)[0])


directories = os.listdir(PATH_TO_ARTICLES)

sorted_directories = sorted(directories,
                            key=lambda x: extract_number(x),
                            reverse=True)

last_directory = sorted_directories[0]

last_directory_prefix = extract_number(last_directory)

article_path = input("Article path: ")
article_path_without_spaces = re.sub('\s+', '-', article_path)

new_article_dir = f'{PATH_TO_ARTICLES}/{last_directory_prefix + 1}. {article_path_without_spaces.lower()}'

os.mkdir(new_article_dir)

new_article_file = f'{new_article_dir}/index.md'

today = datetime.today().strftime('%Y-%m-%d')

file = open(new_article_file, 'w')

# add frontmatter
file.write(f"""---
title: {article_path}
date: "{today}"
cover: ""
pageDescription: ""
pageKeywords: ""
tags: []
---""")
file.close()

# open the file on VSCode
subprocess.run(f'code "{new_article_file}"', shell=True)