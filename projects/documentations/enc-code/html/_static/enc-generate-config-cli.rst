################
generate-config
################

.. |GEN_CFG_DOCS_DIR| replace:: docs/source/enc/generate-config

.. argparse::
    :module: enc.enc_generate_config
    :func: get_main_command_parser
    :prog: enc generate-config

=================
Command Examples
=================

``gc`` is an alias of ``generate-config``.

.. testsetup:: *

    import os
    import pathlib
    import enc.enc_init
    import enc.enc_generate_config
    from tests.test_enc.test_enc_init import EncInitCLITest
    from tests.test_enc.test_generate_config import EncGCCLITest

    def full_path(path):
        this_dir = pathlib.Path(os.getcwd(), '|GEN_CFG_DOCS_DIR|')
        return pathlib.Path(this_dir, path)

1) Normal run
=============

Generate the config using key file, input config and output config path

.. |normal_run_command| replace:: enc gc -k {key_file} -i {config_gen_file} -o {dummy_file}

.. code-block:: shell

    |normal_run_command|

.. testsetup:: normal_run_command

    command = "|normal_run_command|"

.. testcode:: normal_run_command

    EncGCCLITest(command).run()

2) Takes input from ``stdin`` and outputs to ``stdout``
=======================================================

Takes input from ``stdin`` if ``-i`` option is absent and outputs to ``stdout`` if ``-o`` option is absent.

.. |stdin_i_stdout_o_run_command| replace:: enc gc -k {key_file} < {config_gen_file} > {dummy_file}

.. code-block:: shell

    |stdin_i_stdout_o_run_command|

.. testsetup:: stdin_i_stdout_o_run_command

    from tests.test_enc import StrictCLITest
    command = "|stdin_i_stdout_o_run_command|"

.. testcode:: stdin_i_stdout_o_run_command

    StrictCLITest(command).run()

3) Key File is mandatory in CLI argument list
=============================================

The config file may contain encryption and decryption keys which can use the key-file. This makes the key-file
required in the CLI argument list.

.. |key_file_required_command| replace:: enc gc

.. code-block:: shell

    |key_file_required_command|

.. testsetup:: key_file_required_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    command = "|key_file_required_command|"

.. testcode:: key_file_required_command

    EncGCCLITest(command).exits_with_err_code(ENC_ERR_INVALID_USAGE)

4) Does not accept key files from ``stdin``
===========================================

``-`` argument to -k/--key-file instructs program to read key-file from ``stdin`` and since key-file details are
later required for encryption and hence ``-`` is disallowed as an input value for -k/--key-file.

.. |dash_key_file_command| replace:: enc gc -k -

.. code-block:: shell

    |dash_key_file_command|

.. testsetup:: dash_key_file_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    command = "|dash_key_file_command|"

.. testcode:: dash_key_file_command

    EncGCCLITest(command).exits_with_err_code(ENC_ERR_INVALID_USAGE)

5) Does not accept non-existing key files
=========================================

Absent key files obviously do not provide any keys which will disallow encryption/decryption of the vcs tree.

.. |non_existing_key_file_command| replace:: enc gc -k {non_existing_key_file}

.. code-block:: shell

    |non_existing_key_file_command|

.. testsetup:: non_existing_key_file_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    command = "|non_existing_key_file_command|"

.. testcode:: non_existing_key_file_command

    EncGCCLITest(command).exits_with_err_code(ENC_ERR_INVALID_USAGE)

6) Can take inputs from config gen files and write to config files
==================================================================

Config gen files can be provided as inputs from CLI using the ``-i`` option. Similarly output can be written to a file passed to the ``-o`` option.

.. |cfg_gen_from_file_command| replace:: enc gc -k {key_file} -i {config_gen_file} -o {dummy_file}

.. code-block:: shell

    |cfg_gen_from_file_command|

.. testsetup:: cfg_gen_from_file_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    command = "|cfg_gen_from_file_command|"

.. testcode:: cfg_gen_from_file_command

    EncGCCLITest(command).run()

7) Can take config gen files as inputs from stdin using IO redirection
======================================================================

Config gen files can be provided as inputs from ``stdin`` using IO redirection when ``-i`` option is absent.

.. |cfg_gen_from_stdin_command| replace:: enc gc -k {key_file} -o {dummy_file} < {config_gen_file}

.. code-block:: shell

    |cfg_gen_from_stdin_command|

.. testsetup:: cfg_gen_from_stdin_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    from tests.test_enc import StrictCLITest
    command = "|cfg_gen_from_stdin_command|"

.. testcode:: cfg_gen_from_stdin_command

    StrictCLITest(command).run()

8) Can take config gen files as inputs from stdin using IO redirection
======================================================================

Config gen files can be provided as inputs from ``stdin`` using IO redirection when value for the ``-i`` option is ``-``.

.. |cfg_gen_from_stdin_i_command| replace:: cat {config_gen_file} | enc gc -k {key_file} -o {dummy_file} -i -

.. code-block:: shell

    |cfg_gen_from_stdin_i_command|

.. testsetup:: cfg_gen_from_stdin_i_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    from tests.test_enc import StrictCLITest
    command = "|cfg_gen_from_stdin_i_command|"

.. testcode:: cfg_gen_from_stdin_i_command

    StrictCLITest(command).run()

9) Can write generated config file as output to to stdout using IO redirection
==============================================================================

Config gen files can be written as outputs to ``stdout`` using IO redirection when ``-o`` option is absent.

.. |cfg_to_stdout_command| replace:: enc generate-config -k {key_file} < {config_gen_file} > {dummy_file}

.. code-block:: shell

    |cfg_to_stdout_command|

.. testsetup:: cfg_to_stdout_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    from tests.test_enc import StrictCLITest
    command = "|cfg_to_stdout_command|"

.. testcode:: cfg_to_stdout_command

    StrictCLITest(command).run()

10)  Does not accept unregistered config-versions
=================================================

Only registered config-version:

1. ``v0`` (default)

can be supplied.

.. |config_version_specifier_command| replace:: enc gc --config-version unregistered -k {key_file}

.. code-block:: shell

    |config_version_specifier_command|

.. testsetup:: config_version_specifier_command

    from enc.helpers.error_codes import ENC_ERR_INVALID_USAGE
    command = "|config_version_specifier_command|"

.. testcode:: config_version_specifier_command

    EncGCCLITest(command).exits_with_err_code(ENC_ERR_INVALID_USAGE)

11) Force mode enables reinitialisation of enc directory
========================================================

Enable force initialisation of the working tree. If working tree already has a ``.git`` and ``.enc`` directory
then that means it was previously enc-initialised and ``enc-init`` will not reinitialise the enc-repo.
To enable force reinitialisation use the ``-f`` flag.

.. |normal_run_command_force| replace:: enc init {gen_non_existing_process_stage} -k {key_file} -f

.. code-block:: shell

    |normal_run_command_force|

.. testsetup:: normal_run_command_force

    from tempfile import TemporaryDirectory
    from enc.enc_init import ENC_INIT_FORCE_SHRT_OPT, ENC_INIT_FORCE_LNG_OPT
    command = "|normal_run_command_force|"

.. testcode:: normal_run_command_force

    with TemporaryDirectory() as root_dir:
        EncInitCLITest(command.replace(f"-{ENC_INIT_FORCE_SHRT_OPT}", "").replace(f"--{ENC_INIT_FORCE_LNG_OPT}", "")).run_with_root(root_dir)   # remove force and initialise enc repo
        EncInitCLITest(command).run_with_root(root_dir, exist_ok=True)  # reinitialise with force=True

=======================
Examples for gen config
=======================

1) Correct run with full-featured sample gen-config
===================================================

.. |correct_config_gen_sample| replace:: sample-correct-gen-config.ini

Full-featured sample gen-config: `sample-correct-gen-config <../../_static/sample-correct-gen-config.ini>`_

.. |correct_config_gen_sample_command| replace:: enc gc -k {key_file} -i \"%(cfg_gen_file)s\" -o {dummy_file}

.. code-block:: shell

    |correct_config_gen_sample_command|

.. testsetup:: correct_config_gen_sample_command

    command = "|correct_config_gen_sample_command|"

.. testcode:: correct_config_gen_sample_command

    cfg_gen_file = full_path('|correct_config_gen_sample|')
    EncGCCLITest(command % dict(cfg_gen_file=cfg_gen_file)).run()


.. include:: ../enc-fixture-detail.rst
