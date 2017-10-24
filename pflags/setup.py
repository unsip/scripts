from setuptools import setup

setup(
    name='pflags',
    version='0.1',
    py_modules=['pflags'],
    install_requires=[
        'Click',
    ],
    entry_points={
        'console_scripts': ['pflags=pflags:cli'],
    }
)
