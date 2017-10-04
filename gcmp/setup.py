from setuptools import setup

setup(
    name='gcmp',
    version='0.1',
    py_modules=['gcmp'],
    install_requires=[
        'Click',
    ],
    entry_points={
        'console_scripts': ['gcmp=gcmp:cli'],
    }
)
